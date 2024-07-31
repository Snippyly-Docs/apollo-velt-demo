import { VeltProvider, VeltComments, VeltCommentsSidebar, VeltCursor, VeltHuddle, VeltRecorderNotes} from '@veltdev/react';
import YourAuthComponent from './components/YourAuthComponent';
import YourDocument from './components/YourDocument';

function App() {


  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <VeltHuddle/>
      <VeltCursor />
      <VeltRecorderNotes/>
      <VeltComments textMode={false} sidebarButtonOnCommentDialog={true} autoCategorize={true}/>
      <VeltCommentsSidebar />
      <YourAuthComponent/>
      <YourDocument/>
    </VeltProvider>

  );
}

export default App;

