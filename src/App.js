import "./App.css";


function App() {
  function handleHate(){
    let activeIndex = 0;
    const groups = document.getElementsByClassName("card-group");
  }

  function handleLove(){
    console.log('handle love')
    let activeIndex = 0;
    const groups = document.getElementsByClassName("card-group");
    const nextIndex = activeIndex+1 <= groups.length - 1 ? activeIndex+1 : 0;
    console.log(activeIndex,nextIndex);
    console.log(`[data-index="${activeIndex}"]`);
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextIndex}]"`);

    currentGroup.dataset.status = "after";
    console.log(nextGroup);
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  }

  return (
    <div className="App">

      <div className="card-swiper"> 
      <div className="card-groups">
        <div className="card-group" data-index="0" data-status="active">
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
        </div>
        <div className="card-group" data-index="1" data-status="unknown">
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
        </div>
        <div className="card-group" data-index="2" data-status="unknown">
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
          <div className="little-card card"> </div>
          <div className="big-card card"> </div>
        </div>
      </div>
      <div className="card-swiper-buttons"> 
        <button id="hate-button" onClick={handleHate}> hate</button>
        <button id="love-button" onClick={handleLove}> Love</button>
      </div>

      </div>
    </div>
  );
}

export default App;
