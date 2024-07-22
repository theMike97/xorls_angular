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
    private _position: Point;
    private _value: number;
    private _direction: NodeFlowDirection;

    constructor(position: Point) {
        this._position = position;
        this._value = undefined;
        this._direction = undefined;
    }

    public get value(): number {
        return this._value;
    }

    public set value(value: number) {
        this._value = value;
    }

    public get position(): Point {
        return this._position;
    }

    public set position(position: Point) {
        this._position = position;
    }

    public get direction(): NodeFlowDirection {
        return this._direction;
    }

    public set direction(direction: NodeFlowDirection) {
        this._direction = direction;
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
    private _length: number;

    constructor(position: Point, length: number) {
        super(position);
        this._length = length;
        this.value = 0;
    }

    public get length(): number {
        return this._length;
    }

    public set length(length: number) {
        this._length = length;
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

// state model for selected component
export interface SelectedComponent {
    ghost: boolean;
    component: Component;
}

export abstract class Component {
    private _name: ComponentName;
    private _orientation: ComponentOrientation;
    private _position: Point;
    private _nodes: Node[];

    constructor(position: Point, nodes: Node[]) {
        this._name = null;
        this._orientation = ComponentOrientation.EAST;
        this._position = position;
        this._nodes = nodes;
    }

    public get name(): ComponentName {
        return this._name;
    }

    public set name(name: ComponentName) {
        this._name = name;
    }

    public get orientation(): ComponentOrientation {
        return this._orientation;
    }

    public set orientation(orientation: ComponentOrientation) {
        this._orientation = orientation;
    }

    public get position(): Point {
        return this._position;
    }

    public set position(position: Point) {
        this._position = position;
    }

    public get nodes(): Node[] {
        return this._nodes;
    }

    public set nodes(nodes: Node[]) {
        this._nodes = nodes;
    }
}

/* eslint-disable @typescript-eslint/no-extraneous-class */
export abstract class ComponentFactory {
    public static createComponent(componentType: ComponentName): Component {
        switch (componentType) {
            case ComponentName.NOT:
                return new NotGate(null, null);
            case ComponentName.AND:
                return new AndGate(null, null);
            case ComponentName.OR:
                return new OrGate(null, null);
            case ComponentName.XOR:
                return new XorGate(null, null);
            case ComponentName.NAND:
                return new NandGate(null, null);
            case ComponentName.NOR:
                return new NorGate(null, null);
            case ComponentName.INPUT_BIT:
                return new InputBit(null, null);
            case ComponentName.OUTPUT_LED:
                return new OutputLed(null, null);
            case ComponentName.SEVEN_SEG:
                return new SevenSegmentDisplay(null, null);
            case ComponentName.CLOCK:
                return new ClockGenerator(null, null);
            case ComponentName.JOINER:
                return new BusJoiner(null, null);
            case ComponentName.SPLITTER:
                return new BusSplitter(null, null);
            case ComponentName.TEXT:
                return new Text(null, null);
            default:
                return null;
        }
    }
}
/* eslint-enable @typescript-eslint/no-extraneous-class */

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
