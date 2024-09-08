If you're tired of writing repetitive code to handle pagination in your Node.js projects, the paginationx npm package is here to simplify the process. This package, along with its CDN counterpart, allows you to easily implement pagination both on the backend (Node.js) and the frontend (EJS template engine), saving you time and effort.

**1. NPM Package Implementation**
To use the paginationx npm package for Node.js, follow these steps:

Step 1: Install Paginationx npm package
```
npm i paginationx
```

Step 2: Import the module and use them in your controller.
```
const pagination = require("paginationx")

const users = async (req, res) => {
  try {
    const paginate = await pagination(User, 2, req.query)

    res.render("admin/user", {
      users: paginate.data,
      totalPages: paginate.totalPages,

    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

```      
In the code above, we are passing three arguments to the pagination function:
1. First argument: The model name representing the data that we need to apply pagination to.
2. Second argument: Number of items to be shown on a single page.
3. Third argument (optional): Pass the req.query data. Use req.query only if you are using the pagination CDN to handle pagination on the frontend.

The pagination function (const paginate = await pagination(User, 2, req.query)) returns paginated data and total pages:
- To access the paginated data, use pagination.data.
- To access the total number of pages, use pagination.totalPages.

Step 3: Pass the paginated data and total pages count to the ejs.
```
{
      users: paginate.data,
      totalPages: paginate.totalPages,
}
```
Note: Key for passing total pages should exactly be totalPages.

---


**2. Pagination CDN Implementation**

To implement pagination in the ejs template engine, follow these steps.

Step 1: Include the Pagination CDN
Add the following script at the bottom of your EJS file:
```
<script src="https://cdn.jsdelivr.net/gh/SujithVSuresh/pagination-cdn@master/pagination.js"></script>
```

Step 2: Add Pagination Controls to Your Template
Add the following code where you want the pagination buttons to appear:
```
          <div class="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item" id="prevBtn"><a class="page-link text-black" href="#">Previous</a></li>
                <% for(let i=1; i<= totalPages; i++){ %>
                <li class="page-item pagenationBtn" data-page-no="<%= i %>"><a class="page-link text-black"><%= i %></a></li>
                <% } %>
                <li class="page-item" total-pages="<%= totalPages %>" id="nxtBtn"><a class="page-link text-black" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
```
        
The above code provides the interface for pagination. Ensure that you align and style the content properly according to your application's design.


