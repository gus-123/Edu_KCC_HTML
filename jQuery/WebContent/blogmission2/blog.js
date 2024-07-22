$(function() {
	$(window).on(
			'load',
			function() {
				$.getJSON('server.jsp', function(data) {
					$('#list').empty();

					// $('#list').on('click', '.delete', function () {
					// if (confirm('정말로 삭제하시겠습니까?')) {
					// const listItem = $(this).parent();
					// const itemId = listItem.data('id');
					//
					// $.ajax({
					// url: 'server.jsp',
					// type: 'post',
					// data: {
					// action: 'delete',
					// itemId: itemId,
					// },
					// success: function (response) {
					// console.log(response);
					// listItem.remove();
					// }
					// });
					//
					// return false;
					// }
					// });

					$.each(data, function(index, item) {
						let html = '<div id="item">';
						html += '<h3 class="title">' + item.title
								+ '</h3></br>';
						html += '</br><div class="writer">' + item.writer
								+ '</div>';
						html += '<div class="contents">' + item.contents
								+ '</div>';
						html += '<button class="delete" data-id="' + item.id
								+ '">삭제</button>';
						html += '</div>';

						// html += '<button class="delete" data-id="' + item.id
						// + '">삭제</button>';

						$('#list').append(html);
					})
					
//					$('#item').on('click', '.delete', function() {
//						$(this).remove();
//					})

				});

				return false;

			});
});

$(function() {
	$('form').submit(function() {
		$.ajax({
			url : 'server.jsp',
			type : 'post',
			data : $(this).serialize(),
			dataType : 'text',
			success : function(data) {
				$('#list').text(data);
			}
		})

		return false;
	});

});

$(function() {

	$('#list').on('click', '.delete', function() {
		$(this).closest($('#item')).remove();
	})

})