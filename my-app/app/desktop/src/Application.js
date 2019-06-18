/**
 * The application class.
 *
 *
 * ```html @example({tab:1})
 * <custom-tag class='example' onclick='testIt('works');'>click on me</custom-tag>
 * ```
 *
 * ```javascript @example({tab:2, packages:['ext-web-components']})
 * function testIt(message) {
 *   alert(`example ${message}`); 	
 * }
 * ```
 *
 * ```css 
 * @example({tab:2, packages:['ext-web-components']})
 * .example { 
 *   border: 1px solid red; 
 * }
 * ```
 *
 */
Ext.define('MyApp.Application', {
	extend: 'Ext.app.Application',
	name: 'MyApp',
	requires: ['MyApp.*'],
	defaultToken: 'homeview',

	launch: function () {
		Ext.ariaWarn = Ext.emptyFn
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)

		var whichView = 'mainview'
//		var loggedIn = localStorage.getItem("LoggedIn");
//		if(loggedIn != 'true') { whichView = 'loginview' }
		if (Ext.isClassic == true) {
			Ext.create({xtype: whichView, plugins: 'viewport'})
		}
		else {
			Ext.Viewport.add([{xtype: whichView}])
		}
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
