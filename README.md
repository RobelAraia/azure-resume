# azure-resume
My Azure Resume

## First Steps
**Building the frontend:**
- Frontend folder contains the website.
- main.js contains visitor counter code.

## Second Steps:
**Setup Backend Functionality:**
   - Organized backend functionality within the "Backend" folder, containing the API code.

 **Azure Resource Group Creation:**
   - Created an Azure Resource Group through the Azure portal to manage related Azure services.

 **Azure CosmosDB Creation:**
   - Established an Azure CosmosDB instance via the Azure portal to serve as the database backend.

**Local Azure Function Creation:**
   - Developed an Azure Function locally using the Azure CLI for local testing and development.

**Production Deployment of Azure Function:**
   - Deployed the locally developed Azure Function to Azure for production use, leveraging Visual Studio Code and its Azure Functions extension.

## Subsequent Steps:
 **Frontend Deployment to Azure Blob Storage:**
   - Uploaded the frontend files to Azure Blob Storage using the Azure Storage Visual Studio Code extension.

**CORS Configuration:**
   - Updated the CORS settings on the Azure Function to allow requests from the Azure Blob Storage URL.

**Azure CDN Setup:**
   - Configured an Azure CDN (Content Delivery Network) for the Azure Blob Storage to optimize content delivery and improve performance.

**Custom Domain Addition:**
   - Added a custom domain ([www.RobelAraia.me](https://www.RobelAraia.me)) to the Azure CDN to personalize the website's URL.

**HTTPS Enablement:**
    - Enabled HTTPS on the Azure CDN to ensure secure communication between the client and the server.

**CORS Policy Update:**
    - Updated the CORS policy for the Azure Function to include the custom domain added to the Azure CDN.

## Continuous Integration/Continuous Deployment (CI/CD) Setup:
**CI/CD Configuration:**
    - Established Continuous Integration/Continuous Deployment workflows for both the backend and frontend components.

 **GitHub Workflows Creation:**
    - Created GitHub workflows to automate the deployment process triggered by changes pushed to the respective backend and frontend folders.

## Azure Technologies Utilized:
- **Azure CosmosDB:** Used as the database backend for storing and managing data.
- **Azure Functions:** Implemented serverless compute for backend logic and API functionality.
- **Azure Storage:** Utilized Azure Blob Storage for hosting and serving static frontend files.
- **Azure CDN:** Configured to enhance content delivery and improve website performance by caching static assets.
