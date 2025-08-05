import MonacoEditor from "react-monaco-editor"
import type { FC } from "react"

interface EditorProps {
    code: string;
    setCode: (code: string) => void;
}


const Editor: FC<EditorProps> = ({ code, setCode }) => {
    return (
        <div className="h-full w-full">
            <MonacoEditor
                height="100%"
                language="typescript"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || "")}
                options={{
                    fontSize: 14,
                    automaticLayout: true
                }}
            />
        </div>
    )
}

export default Editor