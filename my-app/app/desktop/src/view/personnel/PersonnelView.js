/**
 * Testing docs. 
 *
 * # Simple Toast
 *
 *      @example
 *      // Toast will close in 1000 milliseconds (default)
 *      Ext.toast('Hello Sencha!');
 *
 * # Toast with Timeout
 *
 *      @example
 *      // Toast will close in 5000 milliseconds
 *      Ext.toast('Hello Sencha!', 5000);
 *
 * # Test 3
 * @example
 * ```
 * Ext.toast('Hello Sencha!', 5000);
 * ```
 *
 */
Ext.define('MyApp.view.personnel.PersonnelView',{
	extend: 'Ext.grid.Panel',
	xtype: 'personnelview',
	cls: 'personnelview',
	requires: [],
	controller: 'personnelviewcontroller',
	viewModel: {type: 'personnelviewmodel'},
	store: {type: 'personnelviewstore'},
	columns: [
		{ 
			text: 'Name',
			dataIndex: 'name',
			width: 100,
			cell: {userCls: 'bold'}
		},
		{text: 'Email',dataIndex: 'email',width: 230},
		{
			text: 'Phone',
			dataIndex: 'phone',
			width: 150 
		}
	],
	listeners: {
		select: 'onItemSelected'
	}
});
