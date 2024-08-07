$(document).ready(function() {
    // Adiciona nova tarefa
    $('form').on('submit', function(e) {
        e.preventDefault();

        const newTask = $('#taskInput').val();
        const addTask = $('<li></li>').append(
            $('<span></span>').text(newTask),
            $('<button class="completeTask">Feito</button>')
        );

        $('.tasks').append(addTask);
        $('#taskInput').val('');
    });

    // Marca tarefa como feita
    $(document).on('click', '.completeTask', function() {
        $(this).parent().toggleClass('completed');
    });
});
