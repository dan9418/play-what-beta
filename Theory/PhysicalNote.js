class PhysicalNote {
	constructor(absolutePosition) {
        this.absolutePosition = absolutePosition;
        if(absolutePosition >= 0)
            this.relativePosition = absolutePosition % 12;
        else
            this.relativePosition = 12 + (absolutePosition % 12);
        
        this.octave = 4 + Math.floor(absolutePosition / 12);
    }
}