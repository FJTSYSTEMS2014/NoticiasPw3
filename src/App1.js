import React from 'react';

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=ar&category=&apiKey=d2358245efe14cf09b1f1e97c2e3a7f5")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;

        const containsErrorMessage = () => {
            return <div>Error: {error.message}</div>;
        };

        const isLoading = () => {
            return <div>Loading...</div>;
        };

        const results = () => {
            return (
                <ul>
                    {items.map(result => (
                        <li key={result.index}>
                            {result.index}
                        </li>
                    ))}
                </ul>
            )
        }

        if (error) return containsErrorMessage();
        return !isLoaded ? isLoading() : results();
    }
}