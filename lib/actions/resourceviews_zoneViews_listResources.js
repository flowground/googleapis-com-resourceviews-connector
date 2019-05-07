/**
 * Auto-generated action file for "Google Compute Engine Instance Groups" API.
 *
 * Generated at: 2019-05-07T14:41:55.051Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-resourceviews-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'resourceviews.zoneViews.listResources'
 * Endpoint Path: '/{project}/zones/{zone}/resourceViews/{resourceView}/resources'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "format",
    "listState",
    "maxResults",
    "pageToken",
    "project",
    "resourceView",
    "serviceName",
    "zone"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "format": "format",
    "listState": "listState",
    "maxResults": "maxResults",
    "pageToken": "pageToken",
    "project": "project",
    "resourceView": "resourceView",
    "serviceName": "serviceName",
    "zone": "zone"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2c'] = {token: cfg['Oauth2c']};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2c'] = {token: cfg['Oauth2c']};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2c'] = {token: cfg['Oauth2c']};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2c'] = {token: cfg['Oauth2c']};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2c'] = {token: cfg['Oauth2c']};
    securities['Oauth2'] = {token: cfg['Oauth2']};
    securities['Oauth2c'] = {token: cfg['Oauth2c']};

    let callParams = {
        spec: spec,
        operationId: 'resourceviews.zoneViews.listResources',
        pathName: '/{project}/zones/{zone}/resourceViews/{resourceView}/resources',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}