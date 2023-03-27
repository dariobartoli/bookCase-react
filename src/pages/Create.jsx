import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAppContext } from '../store/Store'


export const Create = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [cover, setCover] = useState("")
    const [intro, setIntro] = useState("")
    const [completed, setCompleted] = useState(false)
    const [review, setReview] = useState("")

    const store = useAppContext();
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value

        switch (name) {
            case 'title':
                setTitle(value)
                break;
            case 'author':
                setAuthor(value)
                break;
            case 'intro':
                setIntro(value)
                break;
            case 'completed':
                setCompleted(e.target.checked)
                break;  
            case 'review':
                setReview(value)
                break;
        }
    }

    const handleOnChangeFile = (e) =>{
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();
        reader.onloadend = function(){
            console.log("RESULT", reader.result);
            setCover(reader.result.toString())
        }
        reader.readAsDataURL(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title === "" || author === "" || cover === "" || intro === ""){
            return alert("complete the fields")
        }
        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        }

        //Mandar a registrar el libro
        store.createItem(newBook);
        navigate("/")

    }



  return (
    <Layout>
        <div className='container'>
            <div className='index'>
                <form onSubmit={handleSubmit} className="form__container">
                    <div className='input__container'>
                        <div className='label__title'>Title:</div>
                        <input type="text" name='title' onChange={handleChange} value={title} className='input__form'/>
                    </div>
                    <div className='input__container'>
                        <div className='label__title'>Author:</div>
                        <input type="text" name='author' onChange={handleChange} value={author} className='input__form'/>
                    </div>
                    <div className='input__container__file'>
                        <div className='label__title'>Cover:</div>
                        <input type="file" name='cover' onChange={handleOnChangeFile} className='input__cover'/>
                        <div>{!!cover ? <img src={cover} width="200px" alt="preview" className='image__form'/> : ""}</div>
                    </div>
                    <div className='input__container'>
                        <div className='label__title'>Introduction:</div>
                        <input type="text" name='intro' onChange={handleChange} value={intro} className='input__form'/>
                    </div>
                    <div className='inputCheck__container'>
                        <div className='label__title'>Completed:</div>
                        <input type="checkbox" name='completed' onChange={handleChange} value={completed}/>
                    </div>
                    <div className='input__container'>
                        <div className='label__title'>Review:</div>
                        <input type="text" name='review' onChange={handleChange} value={review} className='input__form'/>
                    </div>
                    <input type="submit"  value="Register books" className='button__form'/>
                </form>
            </div>
        </div>
    </Layout>
  )
}
