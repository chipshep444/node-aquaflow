# Aquaflow Plumbing API

- Install package JSON: npm init
- Install the Express framework by entering the following: npm install express@4.17.1
- Install Morgan middleware library is used for logging: npm install morgan@1.10.0

- REST endpoints for Aquaflow Plumbing platform based on NodeJS & MongoDB.

## Open Endpoints
- Open endpoints require no Authentication.

- Login : POST /api/login/

## Service Request related
- Endpoints for viewing and manipulating the Service Request API

- Get all service requests : GET /api/cakes/
- Create service request: POST /api/cakes/
- Show details for one service request : GET /api/cakes/:cakeid/
- Update service request details: PUT /api/cakes/:cakeid/
- Delete service request from catalog: DELETE /api/cakes/:cakeid/

## Subscribe related
- Endpoints for viewing and manipulating the Subscribe API

- Get all subscriptions : GET /api/comments/
- Create subscription: POST /api/comments/
- Show details for one subscription : GET /api/comments/:commentsid/
- Update subscription details: PUT /api/comments/:commentsid/
- Delete subscription from catalog: DELETE /api/comments/:commentsid/