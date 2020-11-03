import React, {useState} from "react";
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {stateToHTML} from 'draft-js-export-html';

function Compose(props) {

  const [title, setTitle] = useState('');
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState(EditorState.createEmpty());

  const convertDescriptionFromJSONToHTML = () => {
        try{
          return { __html: stateToHTML(description.getCurrentContent())}
        } catch(exp) {
          console.log(exp)
          return { __html: 'Error' }
        }
    };

  const uploadCallback = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return new Promise((resolve, reject) => {
      fetch('http://localhost:5000/uploadImage', {
        method: 'POST',
        body: formData
      }).then(res => res.json()).then(resData => {
        console.log(resData)
        resolve({
          data: {
            link: resData
          }
        });
      }).catch(error => {
        console.log(error)
        reject(error.toString())
      })
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (title !== "" && shortDesc !== "" && description !== "") {
    const newPost = {
      title: title,
      shortDesc: shortDesc.substring(0, 180) + " ...",
      description: convertToRaw(description.getCurrentContent())
    }

    fetch('http://localhost:3000/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }).then(res => res.json()).then(data => {
      console.log(data)
      setTitle('')
      setShortDesc("")
      setDescription(EditorState.createEmpty())
    }).catch(err => console.log("ERROR:", err))

      window.location.replace("/blog");
    } else {
      console.log("Write something");
    }
  }

  return (
    <div className="container w-50 mt-5 text-center">
      <h1>New post</h1>
      <form noValidate onSubmit={onSubmit}>
        <input type="text"
          className="form-control"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>
        <br/>
        <input type="text"
          className="form-control"
          placeholder="Enter Short Description"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}/>
        <br/>
        <div>
          <Editor
            editorState={description}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            wrapperStyle={{ border: "2px solid green", marginBottom: "20px" }}
            editorStyle={{ height: "300px", padding: "10px"}}
            toolbar={{ image: { uploadCallback }}}
            onEditorStateChange={editorState => setDescription(editorState)}
          />
        </div>
        <br/>
        <div dangerouslySetInnerHTML={convertDescriptionFromJSONToHTML()}></div>
        <br/>
        <button type="submit" className="btn btn-lg btn-primary btn-block mb-5">
          Add Post
        </button>
      </form>
    </div>
  )
}

export default Compose;
