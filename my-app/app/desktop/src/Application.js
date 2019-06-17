/**
 * The application class.
 *
 * @example({tab:1,packages:['ext-webcomponents']})
 * ```html
 * <custom-tag onclick='testIt('works');'>click on me</custom-tag>
 * ```
 * 
 * ```javascript
 * function testIt(message) {
 *   alert(`example ${message}`); 	
 * }
 * ```
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
