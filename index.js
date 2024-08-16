

// class Pagination{
//     constructor(query, options){
//         this.query = query
//         this.options = options
//         this.page = query.page || 1
//         this.limit = options.limit || 10
//         this.skip = (this.page - 1) * this.limit
//     }

//     async paginate(model){
//         const totalDocs = await model.countDocuments()
//         const data = await model.find({}).skip(this.skip).limit(this.limit)
//         const totalPages = Math.ceil(totalDocs / this.limit)

//         return {
//             data: data,
//             totalPages: totalPages
//         }
//     }
// }

// module.exports = Pagination;

const pagination = async (query, model, limitCount) => {
    let page = query.page || 1
    let limit = limitCount || 10
    let skip = (page - 1) * limit

    const totalDocs = await model.countDocuments()
    const totalPages = Math.ceil(totalDocs / limit)
    const data = await model.find({}).skip(skip).limit(limit)

    return {
        data: data,
        totalPages: totalPages
    } 
}

module.exports = pagination;