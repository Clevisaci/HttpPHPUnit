
var structure = $('#structure');
var open = $('#structure .node.open, #structure > ul');
$('> ul', open.parent()).show();
open.parents('ul').show();
structure.find('.node').disableTextSelect(); // zabrání označení položky při dvojkliku
structure.treeview();
$('img.structure-placeholder', structure).hide();

$('#structure .node a.name').click(function (e) {
	if (!e.button && !e.shiftKey) {
		$(this).closest('li').find('> .hitarea').trigger('click');
		e.preventDefault();
	}
});

$('#structure .node a.name').dblclick(function (e) {
	location.href = this.href;
	if ($('> ul', $(this).parent().parent()).is(':hidden'))
	{
		$(this).click();
	}
});
