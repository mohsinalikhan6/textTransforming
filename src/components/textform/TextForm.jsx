import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState('')

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () => {
        let upperCaseText = text.toUpperCase()
        setText(upperCaseText)
        props.showAlert('Converted to UpperCase','success')
    }
    const handleLoClick = () => {
        let lowerCaseText = text.toLowerCase()
        setText(lowerCaseText)
        props.showAlert('Converted to LowerCase','success')

    }
    const handleClearClick = () => {
        let clearCaseText = ' '
        setText(clearCaseText)
        props.showAlert('Clear Text','success')

    }
    const handleCopyClick = () => {
        let copyText = document.getElementById('myBox')
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Copy Clipboard','success')

    }
    const handleExtraSpaceClick = () => {
        let extraSpace = text.split(/[ ]+/)
        setText(extraSpace.join(' '))
        props.showAlert('Remove Extra Spaces','success')
    }
    const handleCapitilizeClick = () => {
        const caplitize = (text) => text[0].toUpperCase() + text.slice(1)
        console.log(caplitize)
        let caplitizeText = text.split(' ').map(caplitize)
        caplitizeText = caplitizeText.join(' ')
        console.log(caplitizeText)
        setText(caplitizeText)
        props.showAlert('Converted to Capitalize','success')
    }

    return (
        < >
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={text} onChange={handleOnChange} className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'dark' : 'white' }} id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-1">Change to UpperCase
                </button>
                <button onClick={handleLoClick} className="btn btn-primary mx-1">Change to LowerCase
                </button>
                <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text
                </button>
                <button onClick={handleCopyClick} className="btn btn-primary mx-1">Copy Text
                </button>
                <button onClick={handleExtraSpaceClick} className="btn btn-primary mx-1 my-1">Remove Extra Space
                </button>
                <button onClick={handleCapitilizeClick} className="btn btn-primary mx-1 my-1">Capitilize Text
                </button>

                <div className="container">
                    <h2>Text Summary</h2>
                    <p>{text.split(' ').length - 1} Words and {text.length} Characters</p>
                    <p>{0.008 * text.split(' ').length} Minutes requried to read.</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default TextForm
