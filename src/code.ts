// import Clipboard from 'clipboard'
import _ from 'lodash' // TODO Remove lodash

import { dispatch, handleEvent } from './codeMessageHandler'

figma.showUI(__html__, { height: 240, width: 300 })

console.log('THIS', this)

const sendSelectionchange = () => dispatch('selectionchange', figma.currentPage.selection)
figma.on('selectionchange', () => sendSelectionchange())
sendSelectionchange() // initial send

handleEvent('copy', (data) => {
  // const nodes: SceneNode[] = [];
  // for (let i = 0; i < msg.count; i++) {
  //   const rect = figma.createRectangle();
  //   rect.x = i * 150;
  //   rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
  //   figma.currentPage.appendChild(rect);
  //   nodes.push(rect);
  // }
  // figma.currentPage.selection = nodes;
  // figma.viewport.scrollAndZoomIntoView(nodes);

  console.info('DATA:', data)

  console.info('LODASH:', _.toUpper('Hello There'))

  // const clipBoard = new Clipboard('HELLO')
  // console.info('HERE HERE HERE', clipBoard)
  // clipBoard.on('success', (e: unknown) => {
  //   console.info('Clipboard Success', e)
  //   //   this.onCopied(e)
  // })
})

handleEvent('close', () => {
  figma.closePlugin()
})
