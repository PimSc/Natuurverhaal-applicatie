import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './WriteBulletin.css';

function WriteBulletin() {
    const [content, setContent] = useState('');

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'link', 'image', 'video'
    ];

    const handleChange = (value) => {
        setContent(value);
    };

    return (
        <>


                    <h3>Typ hier je prikbord bericht</h3>
                    <i id="iGrey">(gebruik de streepjes rechts onderin de hoek om het scherm groter te maken)</i>
                    <br/>
                    <ReactQuill
                        value={content}
                        onChange={handleChange}
                        modules={modules}
                        formats={formats}
                    />


                    {/* Inhoud van de editor kan worden opgehaald uit de 'content'-state */}

        </>
    );
}

export default WriteBulletin;