import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HandleParticles from './HandleParticles'
import QuoteBox from './QuoteBox'
import './styles/App.scss'

class App extends Component {
  constructor(props) {
      super(props)
      this.getQuote = this.getQuote.bind(this)
      this.state = {
          quote: '',
          author: '',
          tweetLink: '',
          color: '',
          backgroundColor: '',
          firstRender: true
      }
  }
  getQuote = () => {
      const quoteURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      fetch(quoteURL).then((response) => {
          return response.json()
      }).then((quotesObj) => {
          const randomQuote = Math.floor(Math.random() * quotesObj.quotes.length)
          const colors = ['clr1', 'clr2', 'clr3', 'clr4', 'clr5']
          const randomColor = Math.floor(Math.random() * colors.length)
          const quote = quotesObj.quotes[randomQuote].quote
          const author = quotesObj.quotes[randomQuote].author
          this.setState({
              quote,
              author,
              tweetLink: `https://twitter.com/intent/tweet?text="${quote}" ${author}`,
              color: colors[randomColor],
              backgroundColor: `bg-${colors[randomColor]}`
          })
          document.querySelector('body').setAttribute('class', this.state.backgroundColor)
      })
  }
  componentDidMount() {
      this.setState({ firstRender: false })
  }
  render() {
      if (this.state.firstRender) {
          this.getQuote()
      }
      return (
        <div>
            <HandleParticles />
            <QuoteBox info={this.state} getQuote={this.getQuote} />
        </div>
      )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
