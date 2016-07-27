jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"kj/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"kj/test/integration/pages/App",
	"kj/test/integration/pages/Browser",
	"kj/test/integration/pages/Master",
	"kj/test/integration/pages/Detail",
	"kj/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "kj.view."
	});

	sap.ui.require([
		"kj/test/integration/NavigationJourneyPhone",
		"kj/test/integration/NotFoundJourneyPhone",
		"kj/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});