
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