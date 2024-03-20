import userModel from "../models/product.js";

export const product = async (req, res) => {

  //ALL define values
  const { company, name, feature, sort,select } = req.query; //desturcture data
  const querryData = {}; //if had value then show filters value else it show all the values

  // by the help of this code we can search by name and company 
  if (company) {
    querryData.company = { $regex: company, $options: "i" }; // use rejex to find the data which is near to search like apple or aple
  }
  if (feature) {
    querryData.feature = feature;
  }

  if (name) {
    querryData.name = { $regex: name, $options: "i" };
  }

  //define the usermodel  and assign to a variable
  let apiData = userModel.find(querryData); //find data in accrding to filter which gives

  //bye the help of this code we can sort the api by name or company
  if (sort) {
    // let sortfix = sort.replace(",", " ");
    let sortfix = sort.split(",").join(" ");
    //     querryData.sort=sortfix;
    apiData = apiData.sort(sortfix);
  }

  // bye the help of this code we can select a value in api like name, company
  if (select) {
    const querryData = select.split(",").join(" ");
    apiData = apiData.select(querryData);
  }

  //this code help in pagination
  let page=Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  let skip=(page-1)*limit;

  // skip is used in pagination and limit is define to define how many values you see at a time
  console.log(sort);
  const data = await apiData.select(select).skip(skip).limit(limit);
  res.status(200).json({ data,total:data.length });
};

export const productTesting = async (req, res) => {
  try {
    const { select } = req.query;
    const product = {};
    let apiData = userModel.find(product);
    if (select) {
      const querryData = select.split(",").join(" ");
      apiData = apiData.select(querryData);
    }

    let page=Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip=(page-1)*limit;

    // 
    const data = await apiData.select(select).skip(skip).limit(limit);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
};
