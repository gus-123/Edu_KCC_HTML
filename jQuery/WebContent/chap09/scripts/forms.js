$(function() {
	$('.quantity input').change(function() {  // 값을 변경할때 change를 사용
		let totalCost = 0;
		let totalQuantity = 0;
		
		$('table tbody tr').each(function(index) {
			let price = parseFloat($(this).find('.price').text().replace(/^[^\d.]/, '')); //find로 해당 자식 접근(숫자나, '.'이 아니면 공백으로 변경) - 정규표현식
			//console.log(price);
			price = isNaN(price) ? 0 : price;
			
			let quantity = parseInt($(this).find('.quantity input').val());  //input에서 값은 val롤 추출
			quantity = isNaN(quantity) ? 0 : quantity;
			
			let cost = price * quantity;
			$(this).find('.cost').text('$'+cost.toFixed(2));  // 값을 넣을때는 text, toFixed로 소수점 2째자리 까지
			
			totalCost += cost;
			totalQuantity += quantity;
		});
		
		$('.subtotal .cost').text('$' + totalCost.toFixed(2));  // Subtotal
		$('.shipping .quantity').text(totalQuantity); //totalQuantity
		
		$('.tax .cost').text(function() {  //Tax
			const taxRate = parseInt(($('.tax .price').text()))/100;
			const taxAmount = totalCost * taxRate;
			return '$' + taxAmount.toFixed(2);
		});
		
		$('.shipping .cost').text(function() {  //Shipping
			const priceRate = parseInt(($('.shipping .price').text()).replace(/^[^\d.]/, ''));
			const priceAmount = totalQuantity * priceRate;
			return '$' + priceAmount.toFixed(2);
		})
		
		$('.total .cost').text(function() {  //Total
			const Tax = parseFloat($('.tax .cost').text().replace(/^\$|\,/g, '')); 
			const Shipping = parseFloat($('.shipping .cost').text().replace(/^\$|\,/g, '')); 
			const Total = totalCost + Tax + Shipping;
			return '$' + Total.toFixed(2);
		})
	
	})
})