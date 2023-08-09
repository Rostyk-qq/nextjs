import {NextApiRequest, NextApiResponse} from "next";

interface ResponseParamsUrl extends NextApiRequest{
    query:{
        id?: any
    }
}
export default function GetId(req: ResponseParamsUrl, res: NextApiResponse){
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.end(req.query.id)
    res.json({id: req.query.id})
}