///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
///<reference path="header/library.d.ts" />

import _ from 'lodash';
import externalLib from 'plugins/orgname-pluginname-datasource/external/library.js';

export default class ChangeMyNameDatasource {
  id: number;
  name: string;

  /** @ngInject */
  constructor(instanceSettings, private backendSrv, private templateSrv, private $q) {
    console.log("Message from your external library: " + externalLib.eval());
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
  }

  query(options) {
    throw new Error("Query Support not implemented yet.");
  }

  annotationQuery(options) {
    throw new Error("Annotation Support not implemented yet.");
  }

  metricFindQuery(query: string) {
    throw new Error("Template Variable Support not implemented yet.");
  }

  testDatasource() {
    return this.$q.when({
      status: 'error',
      message: 'Data Source is just a template and has not been implemented yet.',
      title: 'Error'
    });
  }
}
