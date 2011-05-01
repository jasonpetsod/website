function get_commits_url(basename) {
    return 'https://github.com/api/v2/json/commits/list/jasonpetsod/website/master/content/recipes/' + basename + '.html';
}

function populate_revision_history() {
    var basename = document.location.pathname.replace(
            new RegExp("^/recipes/([^/]+)/$"),
            '$1');

    $.ajax({
        dataType: 'jsonp',
        url: get_commits_url(basename),
        success: function (data) {
            var list = $('<dl>');
            $.each(data.commits, function() {
                var commit = this;
                console.log(commit);
                $('#revision-template').tmpl({
                    'url': 'https://github.com' + commit.url,
                    'date': commit.committed_date,
                    'description': commit.message,
                }).prependTo(list);
            });
            $('#revision-history').html(list);
        },
    });
}

$(function() {
    populate_revision_history();
});
