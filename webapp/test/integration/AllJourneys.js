jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 TravelAgencies in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"kj/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"kj/test/integration/pages/App",
	"kj/test/integration/pages/Browser",
	"kj/test/integration/pages/Master",
	"kj/test/integration/pages/Detail",
	"kj/test/integration/pages/Create",
	"kj/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "kj.view."
	});

	sap.ui.require([
		"kj/test/integration/MasterJourney",
		"kj/test/integration/NavigationJourney",
		"kj/test/integration/NotFoundJourney",
		"kj/test/integration/BusyJourney",
		"kj/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});