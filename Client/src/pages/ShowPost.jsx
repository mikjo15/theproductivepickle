import React, {useEffect, useState} from "react";
import axios from "axios";
import _ from "lodash";
import {EditorState, convertFromRaw} from 'draft-js';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {stateToHTML} from 'draft-js-export-html'

function ShowPost(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState(EditorState.createEmpty())

  // TODO: Dashes instead of spaces in url (kebabcase)
  // TODO: Make a delete function
  // TODO: Check for dublicates in db
  // TODO: Handle 404
  // TODO: Handle posts that don't exist

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${props.match.params.title}`).then(post => {
      setTitle(post.data.title)
      const contentState = convertFromRaw(post.data.description)
      const editorState = EditorState.createWithContent(contentState)
      setDescription(editorState)
    }).catch(err => console.log("An error occured:", err))

  }, [props.match.params.title])

  const convertDescriptionFromJSONToHTML = () => {
    try {
      return {
        __html: stateToHTML(description.getCurrentContent())
      }
    } catch (exp) {
      console.log(exp)
      return {__html: 'Error'}
    }
  }

  return (<section className="bg-success text-center text-light">

    <div className="bg-post w-50 mx-auto">
      <h1>{_.upperFirst(title)}</h1>
      <div dangerouslySetInnerHTML={convertDescriptionFromJSONToHTML()}></div>
    </div>

  </section>)
}

export default ShowPost;
