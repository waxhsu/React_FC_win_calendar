import './ArticlesAndPodcasts.css';
import ArticlesImage from '../../images/articles.png';
import PodcastImage from '../../images/podcasts.png';
import PresentationsImage from '../../images/presentations.png';
import BooksImage from '../../images/books.png';

function ArticlesAndPodcasts(){
  return (
    <div id='ArticlesAndPodcasts'>
        <div className='ArticlesAndPodcastsFormat container-cc py-1'>
            <h1>
                What if you could convince your toughest stakeholders that your work will drive innovation?
            </h1>
        </div>
        <div className='container-cc'>
            <div className='column'>
                <p>
                    We know you feel like you’ve tried everything to get buy-in from stakeholders. You’ve sought out every technique for persuading them to see the power of UX as you do.
                </p>
            </div>
        </div>



        <div>
            <div class="container-cc flex">
                <div class="column basis10">
                    <img src={ArticlesImage} class="img-icon" />
                </div>

                <div class="bg-white column basis90">
                    <h2 class="pl-1">You’ve skimmed hundreds of articles.</h2>
                </div>
            </div>

            <div class="container-cc flex">
                <div class="column basis10">
                    <img src={PodcastImage} class="img-icon" />
                </div>

                <div class="bg-white column basis90">
                    <h2 class="pl-1">You’ve listened to dozens of podcasts.</h2>
                </div>
            </div>

            <div class="container-cc flex">
                <div class="column basis10">
                    <img src={PresentationsImage} class="img-icon" />
                </div>

                <div class="bg-white column basis90">
                    <h2 class="pl-1">You’ve watched the leadership conference presentations.</h2>
                </div>
            </div>

            <div class="container-cc flex">
                <div class="column basis10">
                    <img src={BooksImage} class="img-icon" />
                </div>

                <div class="bg-white column basis90">
                    <h2 class="pl-1">You’ve read so many books.</h2>
                </div>
            </div>
        </div>



        <div className='container-cc'>
            <p>
                You’ve done your best to solve your complete puzzle by pulling all the
                pieces together. It’s hard. Especially when every suggestion still
                leaves you with an incomplete picture. And when you don’t have the
                right support to bring the picture into focus.
            </p>
            <p>
                This means that you're standing still no matter how much action
                you take. For an action-taker like you, that feeling of stalling out
                is so defeating. It’s exhausting.
            </p>
            <p>
                We get it. We’ve been there.
            </p>
            <p>
                We also know how to get through it. And we know how to get <i>you</i> through
                it.
            </p>
        </div>



    </div>
    
  )
}

export default ArticlesAndPodcasts;


