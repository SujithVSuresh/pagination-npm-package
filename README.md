
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
