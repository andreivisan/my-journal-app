function App() {
  return (
    <div className="">
      <head>
        <title>My Journal</title>
      </head>
      
      <main>
        <div className="min-h-screen">
          <div className="text-center p-10 ">
            <h1 className="text-5xl py-2 font-bold font-vollkorn">MyJournal</h1>
          </div>
          <div className="flex justify-center gap-16 font-vollkorn">
            <a href="#">Entries</a>
            <a href="#">Drafts</a>
            <a href="#">New Posts</a>
          </div>
          <div className="py-20 font-mate">
            <ul>
              <li className="flex justify-center gap-52 py-2 text-teal-600">
                <a href="#">7 Oct 2022</a>
                <a href="#">12:00</a>
              </li>
              <li className="flex justify-center gap-52 py-2">
                <a href="#">29 Jun 2022</a>
                <a href="#">07:00</a>
              </li>
              <li className="flex justify-center gap-52 py-2">
                <a href="#">16 May 2022</a>
                <a href="#">00:16</a>
              </li>
              <li className="flex justify-center gap-52 py-2">
                <a href="#">25 Apr 2022</a>
                <a href="#">07:10</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
