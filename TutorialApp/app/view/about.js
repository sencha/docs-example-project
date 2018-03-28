
Ext.define('TutorialApp.view.about',{
    extend: 'Ext.panel.Panel',

    requires: [
        'TutorialApp.view.aboutController',
        'TutorialApp.view.aboutModel'
    ],

    controller: 'about',
    viewModel: {
        type: 'about'
    },

    html: 'Hello, World!!'
});
