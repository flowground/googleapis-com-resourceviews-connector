# ![LOGO](logo.png) Google Compute Engine Instance Groups **flow**ground Connector

## Description

A generated **flow**ground connector for the Google Compute Engine Instance Groups API (version v1beta2).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/resourceviews/v1beta2/swagger.json<br/>
Generated at: 2019-05-23T12:13:36+03:00

## API Description

The Resource View API allows users to create and manage logical sets of Google Compute Engine instances.

## Authorization

Supported authorization schemes:
- OAuth2
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Retrieves the list of operation resources contained within the specified zone.

*Tags:* `zoneOperations`

#### Input Parameters
* `filter` - _optional_ - Optional. Filter expression for filtering listed resources.
* `maxResults` - _optional_ - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
* `pageToken` - _optional_ - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
* `project` - _required_ - Name of the project scoping this request.
* `zone` - _required_ - Name of the zone scoping this request.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### Retrieves the specified zone-specific operation resource.

*Tags:* `zoneOperations`

#### Input Parameters
* `operation` - _required_ - Name of the operation resource to return.
* `project` - _required_ - Name of the project scoping this request.
* `zone` - _required_ - Name of the zone scoping this request.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### List resource views.

*Tags:* `zoneViews`

#### Input Parameters
* `maxResults` - _optional_ - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
* `pageToken` - _optional_ - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
* `project` - _required_ - The project name of the resource view.
* `zone` - _required_ - The zone name of the resource view.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### Create a resource view.

*Tags:* `zoneViews`

#### Input Parameters
* `project` - _required_ - The project name of the resource view.
* `zone` - _required_ - The zone name of the resource view.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### Delete a resource view.

*Tags:* `zoneViews`

#### Input Parameters
* `project` - _required_ - The project name of the resource view.
* `resourceView` - _required_ - The name of the resource view.
* `zone` - _required_ - The zone name of the resource view.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### Get the information of a zonal resource view.

*Tags:* `zoneViews`

#### Input Parameters
* `project` - _required_ - The project name of the resource view.
* `resourceView` - _required_ - The name of the resource view.
* `zone` - _required_ - The zone name of the resource view.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### Add resources to the view.

*Tags:* `zoneViews`

#### Input Parameters
* `project` - _required_ - The project name of the resource view.
* `resourceView` - _required_ - The name of the resource view.
* `zone` - _required_ - The zone name of the resource view.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### Get the service information of a resource view or a resource.

*Tags:* `zoneViews`

#### Input Parameters
* `project` - _required_ - The project name of the resource view.
* `resourceName` - _optional_ - The name of the resource if user wants to get the service information of the resource.
* `resourceView` - _required_ - The name of the resource view.
* `zone` - _required_ - The zone name of the resource view.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### Remove resources from the view.

*Tags:* `zoneViews`

#### Input Parameters
* `project` - _required_ - The project name of the resource view.
* `resourceView` - _required_ - The name of the resource view.
* `zone` - _required_ - The zone name of the resource view.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### List the resources of the resource view.

*Tags:* `zoneViews`

#### Input Parameters
* `format` - _optional_ - The requested format of the return value. It can be URL or URL_PORT. A JSON object will be included in the response based on the format. The default format is NONE, which results in no JSON in the response.
    Possible values: NONE, URL, URL_PORT.
* `listState` - _optional_ - The state of the instance to list. By default, it lists all instances.
    Possible values: ALL, RUNNING.
* `maxResults` - _optional_ - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
* `pageToken` - _optional_ - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
* `project` - _required_ - The project name of the resource view.
* `resourceView` - _required_ - The name of the resource view.
* `serviceName` - _optional_ - The service name to return in the response. It is optional and if it is not set, all the service end points will be returned.
* `zone` - _required_ - The zone name of the resource view.

### Update the service information of a resource view or a resource.

*Tags:* `zoneViews`

#### Input Parameters
* `project` - _required_ - The project name of the resource view.
* `resourceView` - _required_ - The name of the resource view.
* `zone` - _required_ - The zone name of the resource view.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* `userIp` - _optional_ - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-resourceviews-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
