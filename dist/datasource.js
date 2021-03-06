///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
///<reference path="header/library.d.ts" />
System.register(['plugins/orgname-pluginname-datasource/external/library.js'], function(exports_1) {
    var library_js_1;
    var ChangeMyNameDatasource;
    return {
        setters:[
            function (library_js_1_1) {
                library_js_1 = library_js_1_1;
            }],
        execute: function() {
            ChangeMyNameDatasource = (function () {
                /** @ngInject */
                function ChangeMyNameDatasource(instanceSettings, backendSrv, templateSrv, $q) {
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.$q = $q;
                    console.log("Message from your external library: " + library_js_1.default.eval());
                    this.name = instanceSettings.name;
                    this.id = instanceSettings.id;
                }
                ChangeMyNameDatasource.prototype.query = function (options) {
                    throw new Error("Query Support not implemented yet.");
                };
                ChangeMyNameDatasource.prototype.annotationQuery = function (options) {
                    throw new Error("Annotation Support not implemented yet.");
                };
                ChangeMyNameDatasource.prototype.metricFindQuery = function (query) {
                    throw new Error("Template Variable Support not implemented yet.");
                };
                ChangeMyNameDatasource.prototype.testDatasource = function () {
                    return this.$q.when({
                        status: 'error',
                        message: 'Data Source is just a template and has not been implemented yet.',
                        title: 'Error'
                    });
                };
                return ChangeMyNameDatasource;
            })();
            exports_1("default", ChangeMyNameDatasource);
        }
    }
});
//# sourceMappingURL=datasource.js.map