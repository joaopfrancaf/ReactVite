import { useEffect, useState } from "react"
import Header from "./components/header"
import Post from "./components/post"
import Sidebar from "./components/sidebar"
import { StyledDivWrapper } from "./styles/pages/app"
import { createServer } from "miragejs"
import axios from "axios"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/post", () => {
      return {
        posts : [
          {
            id: 1,
            author: {
              avatarUrl: 'https://github.com/diego3g.png',
              name: 'Diego Fernandes',
              role: 'CTO @Rocketseat'
            },
            content: [
              { type: 'paragraph', content: 'Fala galera 👋' },
              { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
              { type: 'link', content: 'jane.design/doctorcare' },
            ],
            publishedAt: new Date('2022-05-03 20:00:00'),
          },
          {
            id: 2,
            author: {
              avatarUrl: 'https://github.com/maykbrito.png',
              name: 'Mayk Brito',
              role: 'Educator @Rocketseat'
            },
            content: [
              { type: 'paragraph', content: 'Fala galera 👋' },
              { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
              { type: 'link', content: 'jane.design/doctorcare' },
            ],
            publishedAt: new Date('2022-05-10 20:00:00'),
          },
        ],
      }
    })
  },
})

function App() {
  const [post,setPost] = useState([])

    useEffect(() => {
        axios.get('/api/post')
        .then(function (response) {
            // manipula o sucesso da requisição
            setPost(response.data);
        })
        .catch(function (error) {
            // manipula erros da requisição
            console.error(error);
        })
        .finally(function () {
            // sempre será executado
        });
    },[])

    console.log(post)

  return (
    <>
      <Header/>

      <StyledDivWrapper>
        <Sidebar/>
        <main>
          {post.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </StyledDivWrapper>
    </>
  )
}

export default App
