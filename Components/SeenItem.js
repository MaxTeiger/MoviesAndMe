// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import FadeIn from '../Animations/FadeIn'

class SeenItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            longPress: false
        }
    }


    _displayText(film) {
        if (this.state.longPress) {
            text = "Sorti le : " +film.release_date
        }
        else {
            text = film.title
        }

        return text
    }

    _toggleLongPress() {
        if (this.state.longPress) {
            this.setState({
                longPress: false
            })
        }
        else {
            this.setState({
                longPress: true
            })

        }
    }
    render() {
        const { film, displayDetailForFilm } = this.props
        return (
            <FadeIn>
                <TouchableOpacity
                    style={styles.main_container}
                    onPress={() => displayDetailForFilm(film.id)}
                    onLongPress={() => this._toggleLongPress()}>
                    <Image
                        style={styles.image}
                        source={{ uri: getImageFromApi(film.poster_path) }}
                    />
                    <Text style={styles.title_text}>{this._displayText(film)}</Text>
                </TouchableOpacity>
            </FadeIn>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        margin: 5,
        borderRadius: 120 / 2
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingLeft: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    },
    favorite_image: {
        width: 25,
        height: 25,
        marginRight: 5
    }
})

export default SeenItem
