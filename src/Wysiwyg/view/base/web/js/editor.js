define([
    'jquery',
    'uiComponent',
    '//cdn.tinymce.com/4/tinymce.min.js'
], function ($, Component) {
    'use strict';

    return {
        init: function (htmlId, config) {
            this.htmlId = htmlId;
            this.config = config;

            this.initialize();
        },

        initialize: function () {
            var settings = {
                selector: '#' + this.htmlId,
                theme: 'modern',
                plugins: [
                    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen',
                    'insertdatetime media nonbreaking save table contextmenu directionality',
                    'emoticons template paste textcolor colorpicker textpattern imagetools autoresize'
                ],
                toolbar1: 'insertfile undo redo | forecolor backcolor | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media',
                image_advtab: true,
                templates: [
                    {title: 'Test template 1', content: 'Test 1'},
                    {title: 'Test template 2', content: 'Test 2'}
                ],
                content_css: [
                    this.config.content_css
                ]
            };
            console.log(this.config);
            window.tinymce.init(settings);
        }
    };
});
