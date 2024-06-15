const mongoes = require('mongoose');
const { title } = require('process');

const commentSchema = new mongoes.Schema({
    commentBody: {
       type: String
      },
    created_at: { 
       type: Date, default: Date.now 
      },
  });

const postSchama = new mongoes.Schema({
    title:{
        type:String,
        required:true
    },
    date: { 
        type: Date, default: Date.now 
    },
    content:{
        type:String,
        required:true
    },
    comments :[commentSchema]
});

module.exports = mongoes.model("post",postSchama); 