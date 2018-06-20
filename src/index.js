import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import axios from 'axios';
import _ from 'lodash';
import API_KEY from '../API_KEY.txt';

//const API_KEY = fs.readFileSync('../API_KEY.txt') ;

// Create new component
class App extends Component{
    constructor(props){
        super(props);

        this.state = { videos: [], selectedVideo: null }

        this.videoSearch('exo hits');
    }

    videoSearch(term){
        axios.get('https://www.googleapis.com/youtube/v3/search',
        {
            params: {
                key: API_KEY,
                part: 'snippet',
                maxResults: 7,
                q: term,
                type: 'video'
            }
        })
        .then((res) => {
            console.log(res.data.items);
            this.setState({ videos: res.data.items, selectedVideo: res.data.items[0]  })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        const videoSearch = _.debounce((term) => this.videoSearch(term),300);
        return (<div>
            <SearchBar onSearchTermChange={(term) => videoSearch(term)} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} videos={this.state.videos} />
        </div>);
    }    
}

// Take components and put into page
ReactDOM.render(<App />, document.querySelector('.container'));
