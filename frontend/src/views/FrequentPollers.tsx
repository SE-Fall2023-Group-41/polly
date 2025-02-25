import { useContext, useState } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { createMcqQuestion } from '../util/createMcqQuestion'
import '../assets/styles/createRoom.css'
import { AppContext } from '../components/App'
import '../assets/styles/loader.css'

export default function FrequentPollers({ history }: RouteComponentProps) {
  const [title, setTitle] = useState('')
  const [correctAnswer, setCorrect] = useState(0)
  const [options, setOptions] = useState(['', '', '', ''])
  const { roomId, isLoading, setIsLoading } = useContext(AppContext)
  var template = localStorage.getItem('template') || 'default';
  function setCorrectAnswer(index: number){
    setCorrect(index)
  }

  function setOptionIndex(optionValue: string, index: number) {
    let _options = options
    _options[index] = optionValue
    setOptions(_options)
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <a className="navbar-brand" href="/">PollMe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/contactus">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="/login-user">Login</a> </li>
                        </ul>
                    </div>
                </div>
    </nav>


    <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
               
                    <div className="col-lg-6">
                 <div className="card2 card border-0 px-4 py-5">
                    <div className="row mb-4 px-3">
                        <h3 className="mb-0 mr-4 mt-2">Here is a list of frequent pollers</h3>
                        <p className="mb-0 text-sm">
                          <br/>
                          You can use these email addresses to send your survey to them.
                        </p>
                        <br/>
                        <br/>


                    <table className = "center table">
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                      </tr>

                      <tr>
                        <td>Alexa Smith</td>
                        <td>asmith@ncsu.edu</td>
                      </tr>

                      <tr>
                        <td>Trevor X</td>
                        <td>trev_rocket@hotmail.com</td>
                      </tr>
                      
                      <tr>
                        <td>Shaq</td>
                        <td>sneil@gmail.com</td>
                      </tr>
                      
                      <tr>
                        <td>Jackie James</td>
                        <td>jj1234@yahoo.com</td>
                      </tr>

                      <tr>
                        <td>Karl J. Diaz</td>
                        <td>KarlJDiaz@dayrep.com</td>
                      </tr>

                      <tr>
                        <td>James Lopez</td>
                        <td>JL213@dayrep.com</td>
                      </tr>

                      <tr>
                        <td>Afrojack</td>
                        <td>jacky@yahoo.com</td>
                      </tr>
                    </table>
                   
                    

                    </div>
</div>
</div>
</div>

</div>


</section>



</>
  )
}