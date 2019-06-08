class PhysicalNote {
	constructor(absolutePosition) {
        this.absolutePosition = absolutePosition;
        if(absolutePosition >= 0)
            this.relativePosition = absolutePosition % 12;
        else
            this.relativePosition = 12 + (absolutePosition % 12);
        
        this.octave = 4 + Math.floor(absolutePosition / 12);

        // Calculate frequency
        let f = 440;
        let distA4 = this.absolutePosition - HOME_DEGREES.A.relativePosition;
        if(distA4 < 0) {
            let dist = Math.abs(distA4);
            for(let i = 0; i < dist; i++) {
                f = f / Math.pow(2, 1/12);
            }
        }
        else {
            for(let i = 0; i < distA4; i++) {
                f = f * Math.pow(2, 1/12);
            }
        }
        this.frequency = Math.round(f);
    }
}
