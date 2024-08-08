import React from 'react';
import {ReactFlow, Handle } from '@xyflow/react';

// Define a custom node with a sub-diagram
const CustomNode = ({ data }) => {
	return (
		<div style={{ padding: 10, border: '1px solid #ddd', borderRadius: 5 }}>
			<h3>{data.label}</h3>
			<div style={{ marginTop: 10 }}>
				{/* Embed sub-diagram or additional content */}
				{data.subDiagram && <SubDiagram nodes={data.subDiagram.nodes} edges={data.subDiagram.edges} />}
			</div>
			<Handle type="source" position="right" />
			<Handle type="target" position="left" />
		</div>
	);
};

// Example SubDiagram component
const SubDiagram = ({ nodes, edges }) => {
	return (
		<div style={{ height: 150, border: '1px solid #ddd', borderRadius: 5 }}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				style={{ height: 150, border: '1px solid #ddd', borderRadius: 5 }}
			/>
		</div>

	);
};

export default CustomNode;
