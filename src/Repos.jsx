
import axios from "axios"
import { useState, useEffect } from "react";
import DisplayRepos from "./DisplayRepo";
import './repos.css'
import { Route, Routes } from 'react-router-dom'
import EachRepoPage from "./EachRepoPage";
import Navbar from "./NavBar";
import ErrorBoundary from "./ErrorBoundary";
import TrollFace from './Troll Face.png'
import Footer from "./Footer";




export default function Repos() {

    let [repos, setRepos] = useState(() => JSON.parse(localStorage.getItem("theResults")) || [])

    let [onPageRepo, setOnPageRepo] = useState(null)
    let [currentItem, setCurrentItem] = useState(0)
    let [loading, setLoading] = useState(true)


    const handleClick = async () => {

        try {
            const result = await axios(`https://api.github.com/users/dy-dayo/repos`)

            localStorage.setItem("theResults", JSON.stringify(result.data))
            setRepos(result.data)

        } catch (err) {
            console.log(err)
        }

    }



    useEffect(() => {
        handleClick()
        setOnPageRepo(repos[currentItem])
        setLoading(false)

    }, [currentItem, onPageRepo])


    function handleNext(event) {
        event.preventDefault()
        setCurrentItem(prevCount => {
            return prevCount === repos.length - 1 ? 0 : prevCount + 1
        })

    }
    function handlePrev(event) {
        event.preventDefault()
        setCurrentItem(prevCount => {
            return prevCount === 0 ? prevCount : prevCount - 1
        })
    }

    return (
        <main>
        <Navbar about="/about"  home="/" img={TrollFace}/>
            <Routes>
                <Route path="/" element={<ErrorBoundary>{loading ? <p>It is loading </p>
                    : <DisplayRepos name={onPageRepo.name}
                        link={onPageRepo.html_url}
                        length={repos.length}
                        handlePrev={handlePrev}
                        handleNext={handleNext} />}</ErrorBoundary>} />

<Route path="/about" element={<ErrorBoundary>{loading ? <p>It is loading</p>
                     :<EachRepoPage name={onPageRepo.name} link={onPageRepo.html_url}
                        fork={onPageRepo.forks} pushed={onPageRepo.pushed_at}
                        size={onPageRepo.size} owner={onPageRepo.owner.login} />}</ErrorBoundary> } />
            </Routes>
            
            <Footer/>
        </main>
    )
}