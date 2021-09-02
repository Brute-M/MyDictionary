import React from 'react'




export default function MeaningCard(props) {
    const { data } = props;

    const isEmpty = (obj) => {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }
    const capatalize = (string) => {
        try {
            return string.charAt(0).toUpperCase() + string.slice(1);
        } catch (error) { }
        return string
    }

    const speakWord = async (e) => {
        document.getElementById("speakBUTTON").innerHTML = `<div class="spinner-grow spinner-grow-sm" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`;
        var audio = new Audio(data.phonetics[0].audio);
        audio.type = 'audio/wav';

        try {
            await audio.play();
            document.getElementById("speakBUTTON").innerHTML = `Speak <span className="py-2 px-2"><svg style={{ backgroundColor: "transparent" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
            <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
            <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
            </svg></span>`
        } catch (err) {
            console.log('Failed to play...' + err);
        }
    }


    return (
        <>
            {data.word !== undefined ?
                <div className="card my-3">
                    <div className="card-body position-relative">
                        <h5 className="card-title">{capatalize(data.word)}</h5>
                        <p className="card-text"> <strong>ORIGIN : </strong> <u>{data.origin === undefined ? "No Origin" : capatalize(data.origin)}</u></p>
                        <button disabled={data.phonetics.filter(e => !isEmpty(e)).length === 0 || data.phonetics === undefined ? true : false} type="button" onClick={speakWord} className="btn btn-primary position-absolute top-0 my-2 mx-2" id="speakBUTTON" style={{ right: "0" }} >
                            Speak <span className="py-2 px-2"><svg style={{ backgroundColor: "transparent" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
                                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                                <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
                                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                                <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                            </svg></span>
                        </button>
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            data.meanings && data.meanings.map((e) => {
                                return <li key={e.partOfSpeech} className="list-group-item">
                                    <div className="list-group">
                                        <div className="list-group-item list-group-item-action" aria-current="true">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1">{e.partOfSpeech}</h5>
                                            </div>
                                            <ol className="list-group list-group-numbered">
                                                {e.definitions.map((i) => {
                                                    if (i.definition !== undefined || i.example !== undefined) {
                                                        return <li key={i.definition} className="list-group-item d-flex justify-content-between align-items-start">
                                                            <div className="ms-2 me-auto">
                                                                <div className="fw-bold">Defination : {capatalize(i.definition)}</div>
                                                                <p className="border px-2 py-1 my-2 rounded" style={{display : i.example ? "block" : "none"}}>{i.example ? `Example : ${capatalize(i.example)}` : ""}</p>
                                                            </div>
                                                        </li>
                                                    } else{
                                                        return null
                                                    }
                                                })}
                                            </ol>
                                        </div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>

                </div> : <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title text-center">No data found</h5>
                    </div>
                </div>}
        </>
    )
}
