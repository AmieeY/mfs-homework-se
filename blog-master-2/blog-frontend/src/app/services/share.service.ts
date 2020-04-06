import { Injectable } from '@angular/core';
import axios from 'axios'
axios.defaults.withCredentials=true
@Injectable({
  providedIn: 'root'
})
export class ShareService {
  archives
  latestArticles
  targets
  
  constructor() { }
  async getAllTargets(){
    let data= await axios.get(`http://localhost:3000/api/target/all`)
    return data.data
  }

  async getArticles(sort,offset,pageSize){
    let data= await axios.get(`http://localhost:3000/api/article?sort=${sort}&offset=${offset}&pageSize=${pageSize}`)
    return [data.data.data,data.data.pagination.nextOffset,data.data.pagination.count]
  }
  async getAllArticles(){
    let data= await axios.get(`http://localhost:3000/api/article`)
    return data.data.data
  }
  async getOneArticle(articleId){
    let data=await axios.get(`http://localhost:3000/api/article/${articleId}`)
    return data.data
  }
  async postOneArticle(article){

    await axios.post(`http://localhost:3000/api/article/${article.id}`,article)
  }
  async deleteOneArticle(articleId){
    await axios.delete(`http://localhost:3000/api/article/${articleId}`)

  }
  async getArchives(){
    let data=await axios.get(`http://localhost:3000/api/archive/`)
    return data.data
  }
  async getOneArchive(time){
    let data=await axios.get(`http://localhost:3000/api/archive/${time}`)
    return data.data
  }
  async getLatestArticles(){
  let data=await axios.get(`http://localhost:3000/api/article?sort=["createdAt","desc"]&offset=0&pageSize=5`)
  return data.data.data
  //return data.data
  }
  async getTargets(){
    let data=await axios.get(`http://localhost:3000/api/target`)
    return data.data.data
  }
  async getOneTarget(targetName){
    let data=await axios.get(`http://localhost:3000/api/target/${targetName}`)
    return data.data
  }



  async login(username,password){

    let res=await axios.post(
      `http://localhost:3000/api/user`,{
      'username':username,'password':password
      }
    )
    return res
  }

  async signin(username,password,email){

    let res=await axios.post(
      `http://localhost:3000/api/user/signin`,{
      'username':username,'password':password,'email':email
      }
    )
    return res
  }
  async getSession(){
    let res=await axios.get(`http://localhost:3000/api/session`)

    if(!res.data.data) return false
    else return true
  }
  async logout(){
    await axios.delete(`http://localhost:3000/api/session`)
  }

}
