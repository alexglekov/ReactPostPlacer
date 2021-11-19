import logo from './logo.svg';
import './App.css';
import './styles/app.css';
import PostItem from "./components/PostItem";
import {useRef, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyButtondelete from "./components/UI/button/MyButtondelete";

function App() {
  let [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Description"},
    {id: 2, title: "Javascript 2", body: "Description"},
    {id: 3, title: "Javascript 3", body: "Description"},
  ])

    const [title, setTitle] = useState('asfasf')
    const [body, setBody] = useState('dasdas')

    const addNewPost = (e) => {
      e.preventDefault()
        const newPost = {
          id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
    }

    const delAll = (e) => {
    e.preventDefault()
    setPosts(posts = [])
    }

    const postDel =(post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
        <MyInput value = {title}
                 onChange={e => setTitle(e.target.value)}
                 type='text'
                 placeholder='Заголовок поста'/>
        <MyInput
            value = {body}
            onChange={e => setBody(e.target.value)}
            type='text'
            placeholder='Описание поста'/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      {
        posts.length != 0
            ? <PostList posts={posts} remove={postDel} title="Список постов JS"/>
            : <h1>Посты не найдены!</h1>
      }

        <MyButtondelete style={{marginTop: "15px"}} onClick={delAll}>Удалить все посты</MyButtondelete>
    </div>
  );
}

export default App;
