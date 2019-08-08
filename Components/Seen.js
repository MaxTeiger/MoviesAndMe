// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from './FilmList'
import SeenList from './SeenList'
import { connect } from 'react-redux'

class Seen extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <SeenList
          films={this.props.seenFilm}
          navigation={this.props.navigation}
          favoriteList={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  avatar_container: {
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.toggleFavorite.favoritesFilm,
    seenFilm: state.toggleSeen.seenFilm
  }
}

export default connect(mapStateToProps)(Seen)
