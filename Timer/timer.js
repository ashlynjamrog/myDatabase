import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProgressBar from 'react-native-progress/Bar';
import Slider from '@react-native-community/slider';
import timerStyles from "./styles";

export default class Converter extends React.Component {
    // Initialize timer, timerValue, and progressValue in constructor
    constructor() {
        super();
        this.state = {
            timer: '0s',
            timerValue: 0,
            progressValue: 0.0
        }

        this.updateSliderTimer = this.updateSliderTimer.bind(this);
        this.changeTimer = this.changeTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    // Update the timer on screen as the slider moves
    updateSliderTimer(value) {
        const newTimer = Math.ceil(value).toString() + 's';
        this.setState({timer: newTimer});
    }

    // Called when the slider component completes: Sets the timer values and starts the count down
    changeTimer(value) {
        const newTimer = Math.ceil(value);
        const newTimerString = newTimer.toString() + 's';
        this.setState({timer: newTimerString, timerValue: newTimer, progressValue: 0.0});

        // Start the countdown
        this.myInterval = setInterval(() => {
            // Decrement the timer values by 1 second
            const decrementedTimer = this.state.timerValue - 1;
            const decrementedTimerString = decrementedTimer.toString() + 's';

            // Update the progress value by the remaining time left
            const updatedProgressValue = 1 - (decrementedTimer / value);
            this.setState({timer: decrementedTimerString, timerValue: decrementedTimer, progressValue: updatedProgressValue});

            if (this.state.timerValue === 0) {
                clearInterval(this.myInterval);
            }
        }, 1000)
    }

    // Called the reset button is pressed: Resets all timer values and progress value
    resetTimer() {
        clearInterval(this.myInterval);
        this.setState({timer: '0s', timerValue: 0, progressValue: 0.0});
    }

    render() {
        return (
            <View style={timerStyles.displayBox}>
                <Text style={timerStyles.title}>Timer</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={timerStyles.subTitle}>Elapsed Time:&nbsp;</Text>
                    <ProgressBar
                        progress={this.state.progressValue}
                        borderColor={'gray'}
                        color={'dodgerblue'}
                        height={27}
                        width={200}
                    />
                </View>
                <Text style={timerStyles.subTitle}>{this.state.timer}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={timerStyles.subTitle}>Duration:&nbsp;&nbsp;&nbsp;</Text>
                    <Slider
                        minimumValue={0}
                        maximumValue={60}
                        onValueChange={this.updateSliderTimer}
                        onSlidingComplete={this.changeTimer}
                        thumbTintColor={'dodgerblue'}
                        minimumTrackTintColor={'dodgerblue'}
                    />
                </View>
                <TouchableOpacity style={timerStyles.resetButton} onPress={this.resetTimer}>Reset</TouchableOpacity>
            </View>
        );
    }
}
