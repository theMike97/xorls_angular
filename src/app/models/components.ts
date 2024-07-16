import type { Point } from './point';

export enum ComponentName {
    // Gates
    NOT = 'Not',
    AND = 'And',
    OR = 'Or',
    XOR = 'Xor',
    NAND = 'Nand',
    NOR = 'Nor',
    XNOR = 'Xnor',
    // IO
    INPUT_BIT = 'Input bit',
    OUTPUT_LED = 'Output LED',
    SEVEN_SEG = '7 segment display',
    CLOCK = 'Clock',
    SPLITTER = 'Splitter',
    JOINER = 'Joiner',
    // Misc.
    TEXT = 'Text'
}

export enum ComponentOrientation {
    NORTH,
    EAST,
    SOUTH,
    WEST
}

export enum NodeFlowDirection {
    IN,
    OUT,
    OMNI
}

export abstract class Node {
    constructor(position: Point) {
        this.position = position;
    }

    public get value(): number {
        return this.value;
    }

    public set value(value: number) {
        this.value = value;
    }

    public get position(): Point {
        return this.position;
    }

    public set position(position: Point) {
        this.position = position;
    }

    public get direction(): NodeFlowDirection {
        return this.direction;
    }

    public set direction(direction: NodeFlowDirection) {
        this.direction = direction;
    }
}

export class BitNode extends Node {
    constructor(position: Point) {
        super(position);
        this.value = 0;
    }

    public set(): void {
        this.value = 1;
    }

    public unset(): void {
        this.value = 0;
    }

    public asserted(): boolean {
        return this.value === 1;
    }
}

export class BusNode extends Node {
    constructor(position: Point, length: number) {
        super(position);
        this.length = length;
        this.value = 0;
    }

    public get length(): number {
        return this.length;
    }

    public set length(length: number) {
        this.length = length;
    }

    public override get value(): number {
        return this.value;
    }

    public override set value(value: number) {
        const maxValue = 2 ** this.length;
        const minValue = (0 - 2) ** (this.length - 1);
        if (value > maxValue || value < minValue) {
            throw new Error(`Cannot assign value to node greater than ${maxValue} or less than ${minValue}`);
        }

        this.value = value;
    }
}

export abstract class Component {
    constructor(position: Point, nodes: Node[]) {
        this.name = null;
        this.orientation = ComponentOrientation.EAST;
        this.position = position;
        this.nodes = nodes;
    }

    public get name(): ComponentName {
        return this.name;
    }

    public set name(name: ComponentName) {
        this.name = name;
    }

    public get orientation(): ComponentOrientation {
        return this.orientation;
    }

    public set orientation(orientation: ComponentOrientation) {
        this.orientation = orientation;
    }

    public get position(): Point {
        return this.position;
    }

    public set position(position: Point) {
        this.position = position;
    }

    public get nodes(): Node[] {
        return this.nodes;
    }

    public set nodes(nodes: Node[]) {
        this.nodes = nodes;
    }
}

// Gates
export class NotGate extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.NOT;
    }
}

export class AndGate extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.AND;
    }
}

export class OrGate extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.OR;
    }
}

export class XorGate extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.XOR;
    }
}

export class NandGate extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.NAND;
    }
}

export class NorGate extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.NOR;
    }
}

export class XnorGate extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.XNOR;
    }
}

// I/O
export class InputBit extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.INPUT_BIT;
    }
}

export class OutputLed extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.OUTPUT_LED;
    }
}

export class SevenSegmentDisplay extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.SEVEN_SEG;
    }
}

export class ClockGenerator extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.CLOCK;
    }
}

export class BusJoiner extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.JOINER;
    }
}

export class BusSplitter extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.SPLITTER;
    }
}

// Misc.
export class Text extends Component {
    constructor(position: Point, nodes: Node[]) {
        super(position, nodes);
        this.name = ComponentName.TEXT;
    }
}
